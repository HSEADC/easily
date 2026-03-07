//   const params = new URLSearchParams(window.location.search);
//   const lowScoreCategories = [];

//   params.forEach((value, key) => {
//     if (categories.includes(key) && parseInt(value) < 3) {
//       lowScoreCategories.push(key);
//     }
//   });
//   if (lowScoreCategories.length > 0) {
//     activateFilters(lowScoreCategories);
//   }

// function activateFilters(categoriestoshow) {
//   activecats.length = 0;
//   categoriestoshow.forEach((cat) => activecats.push(cat));
//   document.querySelectorAll(".a_tag").forEach((tag) => {
//     const tagCat = tag.id;
//     if (categoriestoshow.includes(tagCat)) {
//       tag.classList.add("a_tag_active");
//     } else {
//       tag.classList.remove("a_tag_active");
//     }
//   });
//   updateFilter(categories, activecats);
// }

