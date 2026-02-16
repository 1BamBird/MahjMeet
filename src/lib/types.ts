// src/lib/types.ts

// Type definitions for Match and User in the MahjMeet application

// Represents a User in the system
export interface User {
    id: string; // Unique identifier for the user
    name: string; // Name of the user
    email: string; // Email of the user
    createdAt: Date; // Account creation date
}

// Represents a Match between users
export interface Match {
    matchId: string; // Unique identifier for the match
    user1: User; // First user in the match
    user2: User; // Second user in the match
    scoreUser1: number; // Score of the first user
    scoreUser2: number; // Score of the second user
    createdAt: Date; // Date of match creation
}

// Additional related types can be defined here if needed

