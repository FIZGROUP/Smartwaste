# FIZ GROUP Smart Waste Bank
Starter full-stack IoT waste-bank system.

- Frontend: HTML/CSS/JS → GitHub Pages
- Backend: Node.js + Express → Node hosting
- Database: MySQL
- IoT: HiveMQ MQTT
- Authentication: JWT + bcrypt

## Setup backend
1. `cd backend`
2. Copy `.env.example` to `.env`, then fill credentials.
3. `npm install`
4. `mysql -u root -p < schema.sql`
5. Create admin: `npm run create-admin -- admin@fizgroup.id "StrongPassword123!" "Administrator"`
6. `npm run dev`

## Setup frontend
Edit `frontend/config.js`: set `API_BASE_URL` to deployed backend URL plus `/api`.
Preview with a local static server. Deploy `frontend/` using the included GitHub Actions workflow.

## MQTT payload
Publish JSON to `FIZGROUP/SmartWasteBank/transactions`:
`{"event_id":"SWB01-0001","device_id":"SWB-01","rfid_uid":"A1B2C3D4","weight_kg":1.25,"waste_type":"plastic"}`
Backend checks RFID, waste type, positive weight, and duplicate event ID before storing and awarding points.

## GitHub Pages
Push this folder to a GitHub repository's `main` branch. In Settings → Pages, ensure GitHub Actions is selected. The workflow deploys only `frontend/`.

## Production safety
Use HTTPS, MQTT TLS, private broker credentials/ACLs, strong JWT secret, database backups and rate limiting. Never commit `.env`, MQTT passwords, or JWT secrets. GitHub Pages cannot host Node.js or MySQL; deploy those separately. QR camera scanning needs HTTPS and browser permission. USB barcode scanners that emulate keyboards can enter codes into the manual field.
