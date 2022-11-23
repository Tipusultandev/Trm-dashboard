$(".custom-select").each(function() {
    var classes = $(this).attr("class"),
      id = $(this).attr("id"),
      name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template +=
      '<span class="custom-select-trigger">' +
      $(this).attr("placeholder") +
      "</span>";
    template += '<div class="custom-options">';
    $(this)
      .find("option")
      .each(function() {
        template +=
          '<span class="custom-option ' +
          $(this).attr("class") +
          '" data-value="' +
          $(this).attr("value") +
          '">' +
          $(this).html() +
          "</span>";
      });
    template += "</div></div>";
  
    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(
    function() {
      $(this)
        .parents(".custom-options")
        .addClass("option-hover");
    },
    function() {
      $(this)
        .parents(".custom-options")
        .removeClass("option-hover");
    }
  );
  $(".custom-select-trigger").on("click", function() {
    $("html").one("click", function() {
      $(".custom-select").removeClass("opened");
    });
    $(this)
      .parents(".custom-select")
      .toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function() {
    $(this)
      .parents(".custom-select-wrapper")
      .find("select")
      .val($(this).data("value"));
    $(this)
      .parents(".custom-options")
      .find(".custom-option")
      .removeClass("selection");
    $(this).addClass("selection");
    $(this)
      .parents(".custom-select")
      .removeClass("opened");
    $(this)
      .parents(".custom-select")
      .find(".custom-select-trigger")
      .text($(this).text());
  });
  



var oilCanvas = document.getElementById("oilChart");



var oilData = {
    labels: [
        "Subscribed",
        "Unsubscribed",
        "Pending"
    ],
    datasets: [
        {
            data: [75, 15, 10],
            backgroundColor: [
                "#573BFF",
                "#EC5956",
                "#02C4FB"
            ],
            borderRadius: [{

            }

            ],
            borderWidth: 1
        }],
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontSize: 25,
                        fontStyle: 'bold'
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 25,
                        fontStyle: 'bold'
                    }
                }],
            },

            plugins: {
                tooltip: {
                    callbacks: {
                        labelColor: function(context) {
                            return {
                                borderColor: '#F0F1F4',
                                backgroundColor: '#FFFFFF',
                                boxShadow: '0px 6px 8px rgba(191, 191, 191, 0.1)',
                                borderWidth: 1,
                                borderDash: [2, 2],
                                borderRadius: 10,
                            };
                        },
                        labelTextColor: function(context) {
                            return '#543453';
                        }
                    }
                }
            }
        }
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData
});