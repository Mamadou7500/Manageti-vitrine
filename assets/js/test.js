document.addEventListener("DOMContentLoaded", () => {
  let sliderItem = $(".slider").children(".item.active");
  sliderItem.prev(".item").css({
    left: -200,
  });

  sliderItem.next(".item").css({
    right: -200,
  });

  let items = $(".slider").children(".item");
  let ind = 0;
  $(".slider")
    .children(".item")
    .each(function () {
      $(this).attr("data-index", ind++);
    });

  items.on("click", function (e) {
    const that = $(this);
    let dataIndex = that.data("index");

    $(".item").removeClass("active");
    that.addClass("active");

    items.each(function () {
      if ($(this).data("index") == dataIndex) {
        $(this).addClass("active");
        $(this).css({
          left: 0,
          right: 0,
          "z-index": 3,
        });

        if (dataIndex == "0") {
          $(".item[data-index='4']").css({
            left: -200,
            right: 0,
            "z-index": 1,
          });
          $(".item[data-index='1']").css({
            left: 0,
            right: -200,
            "z-index": 1,
          });
        } else if (dataIndex == "1") {
          $(".item[data-index='0']").css({
            left: -200,
            right: 0,
            "z-index": 1,
          });
          $(".item[data-index='2']").css({
            left: 0,
            right: -200,
            "z-index": 1,
          });
        } else if (dataIndex == "2") {
          $(".item[data-index='1']").css({
            left: -200,
            right: 0,
            "z-index": 1,
          });
          $(".item[data-index='3']").css({
            left: 0,
            right: -200,
            "z-index": 1,
          });
        } else if (dataIndex == "3") {
          $(".item[data-index='2']").css({
            left: -200,
            right: 0,
            "z-index": 1,
          });
          $(".item[data-index='4']").css({
            left: 0,
            right: -200,
            "z-index": 1,
          });
        } else if (dataIndex == "4") {
          $(".item[data-index='3']").css({
            left: -200,
            right: 0,
            "z-index": 1,
          });
          $(".item[data-index='0']").css({
            left: 0,
            right: -200,
            "z-index": 1,
          });
        }
      }
    });
  });
});
