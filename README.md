Backend API — Penugasan OR 2025

Project backend simple yang dipakai untuk penugasan Open Recruitment Makomti 2025.
API ini dibuat dengan Node.js (Express) dan MongoDB, dengan fitur:
- CRUD Product
- Register dan Login user
- JWT Authentication
- Error handling
- Folder sudah disusun rapi
- Semua endpoint sudah dites lewat Postman.

A. Tech yang dipakai
- Node.js + Express
- MongoDB + Mongoose
- JWT (JSON Web Token)
- Postman untuk testing

B. Cara jalanin project
1) Clone repo atau download zip
2) Masuk folder project
3) Install package:
npm install

4) Jalankan server:
npm start

5) Default jalan di:
http://localhost:3000

C. Environment

* Bikin file .env (kalau di local):
PORT=3000
MONGO_URI=<URL MongoDB kamu>
JWT_SECRET=SECRETKEY123

D. Struktur Folder
backend/
│ index.js
│ package.json
│ package-lock.json
│
├─ controllers/
├─ routes/
├─ models/
└─ middlewares/

E. Auth (Register & Login)

Untuk akses beberapa endpoint, perlu token.
Setelah login, response bakal ngasih:
{
  "token": "....."
}

Token akan dimasukin ke header:
Authorization: Bearer <token>

F. Endpoint API
User
POST    /user/register  Register user baru
POST	/user/login     Login dan dapat token

Product
GET	    /api/product	    Lihat semua product
GET	    /api/product/:id	Lihat 1 product
POST	/api/product	    Tambah product (token)
PUT	    /api/product/:id	Update product (token)
DELETE	/api/product/:id	Hapus product (token)

G. Postman

Semua request sudah dites lewat Postman.

File collection bisa di-download di sini:
https://github.com/attayaghalin/backend-open-recruitment-2025/blob/main/Node%20API.postman_collection.json

H. Deployment

Link hosting API:
- (menyusul)

* Catatan

Project ini dibuat khusus untuk penugasan OR 2025, jadi masih basic dan simpel. Tapi semua flow utama sudah jalan:

Register → Login → pakai token → CRUD.

* MAAF TELAT READMENYA KAK, BARU TAU HARUS PUSH.