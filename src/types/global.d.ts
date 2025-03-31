declare global {
    interface User {
        id: number;
        fullName: string,
        email: string,
        photoUrl?: string
    }
    interface Post {
        id: number, 
        userId: number,
        cityName: string,
        lon: number,
        lat: number,
        geocode: [number, number]
        title: string,
        description: string,
        date: Date,
        photoUrl: string
    }
    interface Note {
        id: number,
        userId: number,
        toVisit: string,
        photoUrl: string,
        toDoList: string
    }
}

export {}