<div align="center">
  
![][views] ![][stars] ![][forks] ![][issues] ![][license] ![][repo-size]

<!-- logo/title -->

<div style="display: flex; justify-content: center; align-items:center; gap: 1rem;">
<img src="public/react.svg" style="width: 100px; height: 100px;">
<img src="public/vite.svg" style="width: 90px; height: 100px;">
</div>

### 🏨A Pizza ordering website using React + Vite with preconfigured TailwindCSS, Eslint and Prettier

## ⚙️Dependencies Used

---

**[<kbd> <br> **@reduxjs/toolkit:** ^1.9.5 <br> </kbd>][redux]**&nbsp;&nbsp;
**[<kbd> <br> **react-router-dom:** ^6.14.2 <br> </kbd>][router]**&nbsp;&nbsp;
**[<kbd> <br> **tailwindCss:** ^3.3.3 <br> </kbd>][tailwind]**&nbsp;&nbsp;
**[<kbd> <br> **vitejs:** ^4.4.5 <br> </kbd>][vite]**&nbsp;&nbsp;
**[<kbd> <br> **eslint:** ^8.45.0 <br> </kbd>][eslint]**&nbsp;&nbsp;
**[<kbd> <br> **prettier:** ^3.0.1<br> </kbd>][prettier]**&nbsp;&nbsp;

---

## 📸 Screen Shots

<br>

| **Home Page** | **Menu Page** |
| ------------- | ------------- |
| ![home]       | ![menu]       |

| **Cart** | **Order Page** |
| -------- | -------------- |
| ![cart]  | ![order]       |

<br>
</div>

## 🛠️ Getting Started

⬇️ **Fetch latest source code from master branch.**

```bash
git clone https://github.com/Khushal-ag/vitzza.git

cd vitzza
```

👌 **Create `.env.local` file & add your own `API_URLS` as mentioned in `.env.example` file.**

```js
VITE_RESTURANT_API_URL = <YOUR_API_URL>
VITE_GEOCODING_API_URL = <YOUR_API_URL>
```

👟 **Run the Website with 🆚Code **or** 💻Command Line:**

```bash
pnpm i

pnpm dev
```

<div align="center">

## 📂Directory Structure

</div>

```bash
.
├── CODE_OF_CONDUCT.md
├── index.html
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── prettier.config.cjs
├── public
│   ├── react.svg
│   └── vite.svg
├── README.md
├── src
│   ├── App.jsx
│   ├── features
│   │   ├── cart
│   │   │   ├── CartItem.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── CartOverview.jsx
│   │   │   ├── cartSlice.js
│   │   │   ├── DeleteItem.jsx
│   │   │   ├── EmptyCart.jsx
│   │   │   └── UpdateItemQuantity.jsx
│   │   ├── menu
│   │   │   ├── MenuItem.jsx
│   │   │   ├── Menu.jsx
│   │   │   └── menuLoader.js
│   │   ├── order
│   │   │   ├── CreateOrder.jsx
│   │   │   ├── orderActions.js
│   │   │   ├── OrderItem.jsx
│   │   │   ├── Order.jsx
│   │   │   ├── SearchOrder.jsx
│   │   │   └── UpdateOrder.jsx
│   │   └── user
│   │       ├── CreateUser.jsx
│   │       ├── UserName.jsx
│   │       └── userSlice.js
│   ├── index.css
│   ├── main.jsx
│   ├── services
│   │   ├── apiGeocoding.js
│   │   └── apiRestaurant.js
│   ├── store.js
│   ├── ui
│   │   ├── AppLayout.jsx
│   │   ├── Button.jsx
│   │   ├── Error.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── LinkButton.jsx
│   │   └── Loader.jsx
│   └── utils
│       └── helpers.js
├── tailwind.config.js
└── vite.config.js
```

<div align='center'>

## ☢️Contributors

[![][contributors]][contributors-graph]

_Note: It may take up to 24h for the [contrib.rocks][contrib-rocks] plugin to update because it's refreshed once a day._

</div>

<p align="center">
<img width="150%" src="https://camo.githubusercontent.com/6038c8f1fd8f60de75477470e5a87210e9256202e01dfba9986446304a0f0254/68747470733a2f2f63617073756c652d72656e6465722e76657263656c2e6170702f6170693f747970653d776176696e6726636f6c6f723d6772616469656e74266865696768743d36302673656374696f6e3d666f6f746572">
</p>

<!----------------------------------{ Labels }--------------------------------->

[views]: https://komarev.com/ghpvc/?username=vitzza&label=view%20counter&color=red&style=flat
[repo-size]: https://img.shields.io/github/repo-size/Khushal-ag/vitzza
[issues]: https://img.shields.io/github/issues-raw/Khushal-ag/vitzza
[license]: https://img.shields.io/github/license/Khushal-ag/vitzza
[forks]: https://img.shields.io/github/forks/Khushal-ag/vitzza?style=flat
[stars]: https://img.shields.io/github/stars/Khushal-ag/vitzza
[contributors]: https://contrib.rocks/image?repo=Khushal-ag/vitzza&max=500
[contributors-graph]: https://github.com/Khushal-ag/vitzza/graphs/contributors
[contrib-rocks]: https://contrib.rocks/preview?repo=Khushal-ag%2Fvitzza

<!-----------------------------{ Dependencies Used }---------------------------->

[redux]: https://redux-toolkit.js.org/
[router]: https://reactrouter.com/en/main/start/overview
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[tailwind]: https://tailwindcss.com/
[vite]: https://vitejs.dev/

<!----------------------------------{ Images }--------------------------------->

[home]: https://graph.org/file/fa8cb77fbe45789fd4029.png
[menu]: https://graph.org/file/6b1bf989581158f7abc3f.png
[cart]: https://graph.org/file/c2eb2f0e87f35fab0f3e8.png
[order]: https://graph.org/file/0806d0073013c69761eee.png
