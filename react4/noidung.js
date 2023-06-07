// Tìm hiểu nodejs
// Là 1 runtime của javascript, tương tự như trình duyệt, giúp chạy mã javascript
// Nodejs có thể tạo server trên chính máy tính
// nodejs cung cấp thư viện npm quản lý các thư viện của js, trong đó có react, babel, webpack
// Ngoài ra có sẵn thư viện create-react-app giúp nhanh chóng tạo 1 project react, đã cài sẵn những thư viện quan trọng

// Sử dụng npx create-react-app [tên ứng dụng]
// Giới thiệu npm npx yarn

/** npm
 *  - project scope: cài trên project
 *      npm i [tên thư viện]
 *      npm i -D [tên thư viện] // hoặc --save-dev
 *      npm uninstall [tên thư viện]   // xoá thư viện, ko phần biệt là ở depen hay ở devDepen
 *  - global scope: cài luôn thư viện trên máy
 *      npm i -g create-react-app // cài thư viện create-react-app trên máy, mỗi lần tạo 1 project react có thể dùng luôn thư viện này
 *      npm unistall -g [tên thư viện]
 */ 

/** npx được cài kèm node,npm
 *  - dùng để thay thế cho npm global
 *  - nghĩa là ko cần tải thư viện create-react-app vẫn dùng đc
 *  - nó sẽ kiểm tra xem thư viện create-react-app đã được cài chưa, nếu được cài bằng global rồi thì sử dụng bình thường, còn chưa cài thì nó sẽ tải create-react-app về, tạo ứng dụng, sau đó lại xoá create-react-app đi
 * 
 */

// Yarn, cũng dùng để quản lý thư viện cho npm

// Sử dụng npm i để tải các thư viện đã khai báo trong package.json khi mà xoá thư mục node_modules

// import/export component

// Cấu hình prettier trong project
// Cài extension prettier - formatter
// Tạo file .prettierrc
// Viết các cấu hình trong file này
/*
{
    "arrowParens": "always",
    "bracketSameLine": false,
    "bracketSpacing": true,
    "embeddedLanguageFormatting": "auto",
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxSingleQuote": false,
    "printWidth": 120,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "all",
    "useTabs": false,
    "vueIndentScriptAndStyle": false
}
*/

// Tạo thư mục .vscode/settings.json
// Cấu hình khi save tự động format lại code
/*
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
*/