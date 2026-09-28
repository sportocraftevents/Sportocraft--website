import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services = [
    {
      title: 'Corporate Sports Events',
      description: 'Professionally managed sports competitions and tournaments for your organization.',
      icon: '🏆'
    },
    {
      title: 'Employee Engagement',
      description: 'Build team cohesion through interactive and engaging events.',
      icon: '👥'
    },
    {
      title: 'Corporate Celebrations',
      description: 'Memorable celebrations for milestones and achievements.',
      icon: '🎉'
    },
    {
      title: 'Garba / Navratri',
      description: 'Traditional corporate Garba and Navratri celebrations.',
      icon: '💃'
    },
    {
      title: 'Event Production',
      description: 'Full-scale event production with technical excellence.',
      icon: '🎬'
    }
  ];

  testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Tech Corp India',
      message: 'Sportocraft transformed our company sports day into an unforgettable experience!'
    },
    {
      name: 'Priya Sharma',
      company: 'Finance Solutions',
      message: 'Professional team, excellent execution, and great attention to detail.'
    },
    {
      name: 'Amit Patel',
      company: 'Manufacturing Ltd',
      message: 'Our annual sports event is now the highlight of the year for our employees.'
    }
  ];
}
