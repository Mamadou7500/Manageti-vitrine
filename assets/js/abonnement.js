document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("toggle-switch")
    .addEventListener("change", function () {
      // Variables pour les prix annuels
      var price1Monthly = "14,90€";
      var price2Monthly = "19,90€";
      var price3Monthly = "30€";

      // Variables pour les prix mensuels
      var price1Annually = "19,90€";
      var price2Annually = "25,90€";
      var price3Annually = "36,90€";

      // Variables pour les infos de prix annuels
      var priceInfo1Monthly = "Soit 178,80€ par an";
      var priceInfo2Monthly = "Soit 238,80€ par an";
      var priceInfo3Monthly = "Soit 360€ par an";

      // Variables pour les infos de prix mensuels
      var priceInfo1Annually = "Soit 238,80€ par an";
      var priceInfo2Annually = "Soit 310,80€ par an";
      var priceInfo3Annually = "Soit 442,80€ par an";

      // Vérifier l'état du toggle
      if (this.checked) {
        // Mettre à jour les prix annuels
        document.getElementById("price1").textContent = price1Annually;
        document.getElementById("price2").textContent = price2Annually;
        document.getElementById("price3").textContent = price3Annually;

        // Mettre à jour les infos de prix annuel
        document.getElementById("price1-info").textContent = priceInfo1Annually;
        document.getElementById("price2-info").textContent = priceInfo2Annually;
        document.getElementById("price3-info").textContent = priceInfo3Annually;

        // Afficher les prix annuels et cacher les mensuels
        document.querySelectorAll(".price-monthly").forEach(function (element) {
          element.classList.add("hidden");
        });
        document
          .querySelectorAll(".price-annually")
          .forEach(function (element) {
            element.classList.remove("hidden");
          });
      } else {
        // Mettre à jour les prix mensuels
        document.getElementById("price1").textContent = price1Monthly;
        document.getElementById("price2").textContent = price2Monthly;
        document.getElementById("price3").textContent = price3Monthly;

        // Mettre à jour les infos de prix mensuel
        document.getElementById("price1-info").textContent = priceInfo1Monthly;
        document.getElementById("price2-info").textContent = priceInfo2Monthly;
        document.getElementById("price3-info").textContent = priceInfo3Monthly;

        // Afficher les prix mensuels et cacher les annuels
        document.querySelectorAll(".price-monthly").forEach(function (element) {
          element.classList.remove("hidden");
        });
        document
          .querySelectorAll(".price-annually")
          .forEach(function (element) {
            element.classList.add("hidden");
          });
      }
    });
});
