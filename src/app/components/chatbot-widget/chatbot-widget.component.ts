import { Component, ElementRef, ViewChild, AfterViewChecked, inject, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

interface ChatMessage {
    text: string;
    isBot: boolean;
}

@Component({
    selector: 'app-chatbot-widget',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './chatbot-widget.component.html',
    styleUrl: './chatbot-widget.component.scss'
})
export class ChatbotWidgetComponent implements AfterViewChecked, OnInit {
    @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
    @ViewChild('chatInput') private chatInput!: ElementRef;

    private eRef = inject(ElementRef);
    apiService = inject(ApiService);

    @HostListener('document:click', ['$event'])
    clickout(event: Event) {
        if (this.isOpen && !this.eRef.nativeElement.contains(event.target)) {
            this.closeChat();
        }
    }

    isOpen = false;
    isLoading = false;
    isVisible = true;

    messages: ChatMessage[] = [
        { text: '🤖 You can ask me about my skills, experience, projects, or how to contact me.', isBot: true }
    ];

    userMessage = '';

    ngOnInit() {
        // Check if hidden by default logic is needed beyond the property
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            setTimeout(() => {
                this.scrollToBottom();
                this.focusInput();
            }, 100);
        }
    }

    closeChat() {
        this.isOpen = false;
    }

    sendMessage() {
        if (!this.userMessage.trim() || this.isLoading) return;

        const message = this.userMessage;
        this.messages.push({ text: message, isBot: false });
        this.userMessage = '';
        this.isLoading = true;
        this.scrollToBottom();

        this.apiService.chat(message).pipe(
            catchError(err => {
                console.error('Chat error:', err);
                return of({ message: "I'm having trouble connecting right now. Please try again later." });
            })
        ).subscribe((response: any) => {
            this.isLoading = false;
            const reply = response?.data?.message || "I couldn't process that request.";
            this.streamResponse(reply);
        });
    }

    private streamResponse(text: string) {
        const botMessage: ChatMessage = { text: '', isBot: true };
        this.messages.push(botMessage);

        let index = 0;
        const intervalId = setInterval(() => {
            if (index < text.length) {
                botMessage.text += text.charAt(index);
                index++;
                this.scrollToBottom();
            } else {
                clearInterval(intervalId);
            }
        }, 10); // Adjust typing speed (ms per character)
    }

    ngAfterViewChecked() {
        // Left empty intentionally
    }

    private scrollToBottom(): void {
        setTimeout(() => {
            try {
                this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
            } catch (err) { }
        }, 50);
    }

    private focusInput(): void {
        try {
            this.chatInput.nativeElement.focus();
        } catch (err) { }
    }
}
