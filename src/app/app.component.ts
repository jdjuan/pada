import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  steps = [
    {
      title: '1.Purpose',
      summary: 'What is the expected outcome?',
      description: 'Provide a succinct goal that outlines the expectations of the meeting.',
      benefits: ['Keeps participants aligned', 'Avoids irrelevant discussions'],
    },
    {
      title: '2.Agenda',
      summary: 'How should the time be allocated?',
      description: 'List the steps required to achieve the goal of the meeting.',
      benefits: ['Ensures the meeting remain in order', 'Helps participants stay on point'],
    },
    {
      title: '3.Documents',
      summary: 'Can you share information in advance?',
      description: 'Add attachments that can provide some context for the participants.',
      benefits: ['Saves time on introductions', 'Makes meetings more productive'],
      optional: true,
    },
    {
      title: '4.Actions',
      summary: 'Should participants bring ideas?',
      description: 'Ask participants to bring suggestions for the matter to be discussed.',
      benefits: ['Helps avoid group biases', 'Involves participants actively'],
      optional: true,
    },
  ];
}
