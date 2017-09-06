// JavaScript Document

if(jQuery)(function($){
   $.extend($.easing,{
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }
    });

	$(document).ready(function(){
    var data = {
      "processes":{
        "2cde2568-f891-4f5b-8582-9b42744e3da0":{
          "component":"vm",
            "metadata":{
            "vm_id":"2cde2568-f891-4f5b-8582-9b42744e3da0",
              "vm_status":"SHUTOFF",
              "label":"host_dzw_06171020"
          }
        },
        "a9d6a93d-72b7-48d8-bb84-72629d30f6e0":{
          "component":"vm",
            "metadata":{
            "vm_id":"a9d6a93d-72b7-48d8-bb84-72629d30f6e0",
            "vm_status":"SHUTOFF",
            "label":"testvm_0617"
          }
        },
        "730adb15-1f8a-4de1-bc2d-e64631098ce5":{
          "component":"switch",
          "metadata":{
            "switch_id":"730adb15-1f8a-4de1-bc2d-e64631098ce5",
            "label":"net2-test"
          }
        },
        "ea0107c7-b3d8-489b-a587-2901266317ce":{
          "component":"router",
          "metadata":{
            "router_id":"ea0107c7-b3d8-489b-a587-2901266317ce",
            "label":"cy-Router"
          }
        },
        "e6015d34-51fa-48c3-affc-f838788e89d5":{
          "component":"switch",
          "metadata":{
            "switch_id":"e6015d34-51fa-48c3-affc-f838788e89d5",
            "label":"Ext-Net"
          }
        }
      }
    }
    var paper = Snap(document.getElementById("canvas"), '100%', '100%');

    // Creates circle at x = 50, y = 40, with radius 10
      var circle = paper.circle(50, 40, 10);
      var rect = paper.rect(100,100,30,30);
      var vm = {}
      circle.attr({"fill":"#f00","stroke":"#f00"});
      rect.attr({"fill":"green","stroke":"f00","stroke-width":0});
      for (var i = 0;i < 5;i++) {
        vm[i] = paper.circle(10 + 15 * i, 10, 10)
          .attr({fill: "#000"})
          .data("i", i)

          .click(function () {
            alert(this.data("i"));
            console.log(this);
          });
        console.log(vm[i].data('i'));

      }
      console.log(vm);




      console.log(Snap.fn);

  })
		
	
})(jQuery);


