# 🚌 PINBUS 

This project is a backend service for managing school transportation.  
It handles **users, parents, students, drivers, monitors, buses, and trips** with real-time trip tracking powered by Supabase.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Pin-Bus/Pin-Bus-Back-End.git

npm install
npm run start```


### 2. documintaion

```bash

POST /users → Create a new user  : POST /users → Create a new user

POST /parents → Create a parent linked to a user  {
  "userId": 1,
  "name": "Ahmed Mahmoud",
  "email": "parent@example.com",
  "phone": "+201001234567",
  "type": "mother" | "father",
  "address": "12 Nile Street, Cairo",
  "latitude": 30.0444,
  "longitude": 31.2357
}


POST /students → Add a student  {
  "name": "Ali Ahmed",
  "grade": "Grade 3",
  "class": "3A",
  "dateOfBirth": "2015-09-01",
  "parentsNotes": "Allergic to peanuts",
  "address": "Giza, Egypt",
  "latitude": 30.05,
  "longitude": 31.22,
  "busId": 1,
  "motherId": 2,
  "fatherId": 3
}


POST /drivers → Add a driver

{
  "name": "Mohamed Ali",
  "licenseNumber": "DR123456",
  "phone": "+201112223334"
}

POST /monitors → Add a monitor (linked to user)  {
  "userId": 4,
  "name": "Sara Hassan",
  "phone": "+201223344556"
}


POST /buses → Create a bus  {
  "plateNumber": "ABC-1234",
  "capacity": 40,
  "driverId": 1,
  "monitorId": 1
}

POST /trips → Start a new trip

{
  "busId": 1,
  "monitorId": 1,
  "driverId": 1,
  "scheduledStartTime": "2025-09-05T07:30:00Z"
}


POST /trips/:tripId/stops → Add a stop for a student

{
  "studentId": 10,
  "order": 1,
  "latitude": 30.06,
  "longitude": 31.24
}


```