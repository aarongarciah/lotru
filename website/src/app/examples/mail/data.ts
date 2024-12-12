export const mails = [
  {
    id: "a1f2g3h4-i5j6-47ab-bc12-345678abcdef",
    name: "Elena Novak",
    email: "elena.novak@example.com",
    subject: "Budget Allocation Update",
    text: "Hello team, the updated budget allocations for the next quarter are attached. Let me know if any adjustments are needed.\n\nThanks, Elena",
    date: "2023-11-10T14:00:00",
    read: true,
    labels: ["work", "finance"],
  },
  {
    id: "h6g5f4e3-i2j1-4c2b-bc34-456789abcdef",
    name: "Arjun Patel",
    email: "arjun.patel@example.com",
    subject: "Team Retreat Planning",
    text: "Hi everyone, I'm coordinating our annual team retreat. Please vote on your preferred location and share your availability.\n\nCheers, Arjun",
    date: "2023-11-08T12:30:00",
    read: false,
    labels: ["work", "team"],
  },
  {
    id: "e4f3g2h1-i6j7-4abc-d567-890abcdef123",
    name: "Miriam Lopez",
    email: "miriam.lopez@example.com",
    subject: "Website Revamp Suggestions",
    text: "Hello, I've compiled a list of design improvements for the website revamp. Let me know your thoughts before we proceed.\n\nBest regards, Miriam",
    date: "2023-10-29T10:15:00",
    read: true,
    labels: ["work", "design"],
  },
  {
    id: "i5j6f4g3-e7h8-48ab-bc12-345678abcdef",
    name: "Lars Berg",
    email: "lars.berg@example.com",
    subject: "Sales Report for October",
    text: "Hi team, the sales report for October is finalized. Key highlights are in the attached document. Please review before our meeting.\n\nRegards, Lars",
    date: "2023-10-25T09:45:00",
    read: false,
    labels: ["work", "sales"],
  },
  {
    id: "g3h4i5j6-f7e8-41cd-d234-456789abcdef",
    name: "Aya Tanaka",
    email: "aya.tanaka@example.com",
    subject: "Quarterly Strategy Discussion",
    text: "Hi everyone, let's schedule a meeting to discuss our strategy for the upcoming quarter. Please suggest your availability.\n\nThanks, Aya",
    date: "2023-10-20T16:20:00",
    read: true,
    labels: ["work", "strategy"],
  },
  {
    id: "j6i5f4g3-e8h7-43cd-e567-56789abcdef12",
    name: "Victor Rossi",
    email: "victor.rossi@example.com",
    subject: "Training Module Updates",
    text: "Hi, I've updated the training modules based on recent feedback. Check the shared drive for the new versions.\n\nBest, Victor",
    date: "2023-09-15T11:40:00",
    read: false,
    labels: ["work", "training"],
  },
  {
    id: "f3g4h5i6-j7e8-46ab-f123-67890abcdef34",
    name: "Leila Kaur",
    email: "leila.kaur@example.com",
    subject: "Vacation Plans",
    text: "Hey, are you planning anything for the holidays? I'm considering a trip to Italy. Let me know if you want to join!\n\nCheers, Leila",
    date: "2023-12-01T18:15:00",
    read: false,
    labels: ["personal", "travel"],
  },
  {
    id: "h6j5i4f3-g8e7-49ab-bc12-7890abcdef56",
    name: "Carlos Ramirez",
    email: "carlos.ramirez@example.com",
    subject: "Client Presentation Feedback",
    text: "Hi, the client shared some feedback on our presentation. I've updated the slides accordingly. Please review.\n\nRegards, Carlos",
    date: "2023-11-07T15:30:00",
    read: true,
    labels: ["work", "clients"],
  },
  {
    id: "i4g5h6j7-f8e6-43cd-f123-890abcdef789",
    name: "Naomi Zhang",
    email: "naomi.zhang@example.com",
    subject: "Re: Marketing Strategy",
    text: "Thanks for sharing the marketing strategy draft. I’ve added my comments. Let’s finalize it before the meeting.\n\nBest, Naomi",
    date: "2023-10-18T09:50:00",
    read: true,
    labels: ["work", "marketing"],
  },
  {
    id: "g5h6i7j8-e9f0-42cd-e123-456789abcdef",
    name: "Omar Khalid",
    email: "omar.khalid@example.com",
    subject: "Weekly Status Update",
    text: "Hi team, just a quick reminder to share your weekly status update by today. Let me know if you have any blockers.\n\nThanks, Omar",
    date: "2023-10-13T14:25:00",
    read: true,
    labels: ["work", "updates"],
  },
];

export type Mail = (typeof mails)[number];
