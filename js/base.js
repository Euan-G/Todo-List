;
(function () {

    "use strict";


    $("#submitButton").click(function () {

        var todoText = $("#add-task").val();

        if (todoText == "") {

            alert("你难道什么事情都没有？╭(°A° `)╮");

        } else {

            $(".task-list").append("<div class='task-item'><span><input type='checkbox'></span><span class='item-content'><p>" + todoText + "</p></span><span class='delete'>Delete</span></div>");

        }

        $("#add-task").val("");


        $('input').iCheck({

            checkboxClass: 'icheckbox_flat-green',

        });

    });


    $(".task-list").on('click', '.delete', function () {

        $(this).parent().css("display", "none");

    });


    $('.task-list').on('ifToggled', "input" , function(){

        $(this).parents(".task-item").find("p").toggleClass("deleted");

        $(this).parents(".task-item").toggleClass("deleted-color");

        })

        .iCheck({

        checkboxClass: 'icheckbox_flat-green',
       
      });

      $(".task-list").on("click", ".task-item", function () {

        $(this).find("input").iCheck('toggle');

    });


})()