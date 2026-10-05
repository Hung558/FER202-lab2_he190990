# FER202 - Lab 2 (HE190990)

Project React (Create React App) khởi tạo cho bài thực hành FER202.

## Công nghệ

- React 18, React Router 6
- React Bootstrap / Bootstrap 5
- Axios
- json-server (giả lập REST API)

## Cài đặt & chạy

```bash
npm install
npm start
```

Ứng dụng chạy tại http://localhost:3000.

Nếu cần API giả lập, tạo file `db.json` rồi chạy:

```bash
npx json-server db.json --port 9999
```

## Scripts

| Lệnh            | Mô tả                          |
|-----------------|--------------------------------|
| `npm start`     | Chạy dev server                |
| `npm run build` | Build production vào `build/`  |
| `npm test`      | Chạy test                      |

## Cấu trúc

```
public/        # index.html, favicon, manifest
src/
  index.js     # entry point
  App.js       # component gốc
```
