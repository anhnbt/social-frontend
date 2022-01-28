# Structure for ReactJS

-- components
-- pages
-- services
-- store
-- styles

## Installation 
- yarn add @coreui/react
- yarn add @coreui/coreui
- yarn add @coreui/icons
- yarn add @coreui/icons-react
- yarn add react-router
- yarn add react-router-dom
- yarn add @types/react-router
- yarn add @types/react-router-dom
- yarn add redux (Redux Core)
- yarn add react-redux
- yarn add @types/react-redux (`react-redux` < v7.2.3)
- yarn add redux-thunk (Nếu cài đặt gói `yarn add @reduxjs/toolkit` thì không cần chạy lệnh này)

## Redux

### Redux + Plain JS template
npx create-react-app my-app --template redux
### Redux + TypeScript template
npx create-react-app my-app --template redux-typescript

Kể từ phiên bản React Redux v7.2.3 mặc định có thêm gói `@types/react-redux` được thêm tự động (Nếu không có thể cài đặt thủ công bằng cách `npm install @types/react-redux` hoặc `yarn add @types/react-redux`).
## Create tsx file
- `rafc`
