const menu = () => {
  const menu = document.querySelector('menu');
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
      if (e.target.closest('.menu')) {
          menu.classList.add('active-menu');
      } else if (!e.target.closest('menu') || e.target.classList.contains('close-btn') || e.target.closest('a')) {
          menu.classList.remove('active-menu');
      }
  });
};

export default menu;


// Много обработчиков
// const menu = () => {
//   const menuBtn = document.querySelector(".menu");
//   const menu = document.querySelector("menu");
//   const closeBtn = menu.querySelector(".close-btn");
//   const menuItems = menu.querySelectorAll("ul>li>a");

//   const handleMenu = () => {
//     menu.classList.toggle("active-menu");
//   };

//   menuBtn.addEventListener("click", handleMenu);

//   closeBtn.addEventListener("click", handleMenu);

//   menuItems.forEach((menuItem) =>
//     menuItem.addEventListener("click", handleMenu)
//   );
// };

// export default menu;
