$(document).ready(function($) {
    $("#signup").submit(function(evt) {
           evt.preventDefault();
              $.ajax({
              url: 'includes/register.php',
              method : "post",
              dataType:'json',
              data:$(this).serialize(),
              success: function (response) {
                 console.log(response.response)
                 if(response.status === 0){
                   $("#spinner").removeClass("d-none")
                   $("#spinner").addClass("d-block");
                   setTimeout(() => {
                      $("#spinner").removeClass("d-block")
                      $("#spinner").addClass("d-none");
                      $("#errorMsg").removeClass('d-none')
                      $("#errorMsg").addClass('d-block')
                      $("#errorMsg").addClass('alert alert-danger');
                      $("#errorMsg").html(response.response);
                      setTimeout(() => {
                         $("#errorMsg").removeClass('d-block')
                         $("#errorMsg").addClass('d-none')
                      },2001);
                   }, 2000);
                 } else if (response.status === 1) {
                   $("#spinner").removeClass("d-none")
                   $("#spinner").addClass("d-block");
                    setTimeout(function() {
                           window.location="login.php";
                    }, 1500)
                 } else{
                    $("#errorMsg").html("please check what you are doing");                   
                 }
              },
              error: function (response) {
                 // let msg = JSON.parse(response);
                 console.log(response)
              }
           })
        })
 
        $("#login").submit(function(evt) {
          evt.preventDefault();
             $.ajax({
             url: 'includes/login.php',
             method : "post",
             dataType:'json',
             data:$(this).serialize(),
             success: function (response) {
                console.log(response.response)
                if(response.status === 0){
                   $("#spinner").removeClass("d-none")
                   $("#spinner").addClass("d-block");
                   setTimeout(() => {
                      $("#spinner").removeClass("d-block")
                      $("#spinner").addClass("d-none");
                      $("#errorMsg").removeClass('d-none')
                      $("#errorMsg").addClass('d-block')
                      $("#errorMsg").addClass('alert alert-danger');
                      $("#errorMsg").html(response.response);
                      setTimeout(() => {
                         $("#errorMsg").removeClass('d-block')
                         $("#errorMsg").addClass('d-none')
                      },1501);
                   }, 1500);
                } else if (response.status === 1) {
                   // $("#errorMsg").removeClass('alert alert-danger');
                   $("#spinner").removeClass("d-none")
                   $("#spinner").addClass("d-block");
                   setTimeout(() => {
                         window.location="index.php";
                   }, 1500);
                   
                }else if(response.status === 2){
                   $("#spinner").removeClass("d-none")
                   $("#spinner").addClass("d-block");
                   setTimeout(() => {
                         window.location="patient-profile.php?id="+response.response;
                   }, 1500);
                } else{
                   $("#errorMsg").html("please check what you are doing");                   
                }
             },
             error: function (response) {
                // let msg = JSON.parse(response);
                console.log(response)
             }
          })
        })

        $("#message").submit(function(evt) {
         evt.preventDefault();
            $.ajax({
            url: 'includes/message.php',
            method : "post",
            dataType:'json',
            data:$(this).serialize(),
            success: function (response) {
               console.log(response.response)
               if(response.status === 0){
                  $("#spinner").removeClass("d-none")
                  $("#spinner").addClass("d-block");
                  setTimeout(() => {
                     $("#spinner").removeClass("d-block")
                     $("#spinner").addClass("d-none");
                     $("#errorMsg").removeClass('d-none')
                     $("#errorMsg").addClass('d-block')
                     $("#errorMsg").addClass('alert alert-danger');
                     $("#errorMsg").html(response.response);
                     setTimeout(() => {
                        $("#errorMsg").removeClass('d-block')
                        $("#errorMsg").addClass('d-none')
                     },1501);
                  }, 1500);
               } else if (response.status === 1) {
                  // $("#errorMsg").removeClass('alert alert-danger');
                  $("#spinner").removeClass("d-none")
                  $("#spinner").addClass("d-block");
                  setTimeout(() => {
                     $("#spinner").removeClass("d-block")
                     $("#spinner").addClass("d-none");
                     $("#errorMsg").removeClass('d-none')
                     $("#errorMsg").addClass('d-block')
                     $("#errorMsg").addClass('alert alert-success');
                     $("#errorMsg").html(response.response);
                  }, 1500);
                  
               }else if(response.status === 2){
                  $("#spinner").removeClass("d-none")
                  $("#spinner").addClass("d-block");
                  setTimeout(() => {
                        window.location="patient-profile.php?id="+response.response;
                  }, 1500);
               } else{
                  $("#errorMsg").html("please check what you are doing");                   
               }
            },
            error: function (response) {
               // let msg = JSON.parse(response);
               console.log(response)
            }
         })
       })
        

       $("#reachout").submit(function(evt) {
         evt.preventDefault();
            $.ajax({
            url: 'includes/reachout.php',
            method : "post",
            dataType:'json',
            data:$(this).serialize(),
            success: function (response) {
               console.log(response.response)
               if(response.status === 0){
                  $("#spinner").removeClass("d-none")
                  $("#spinner").addClass("d-block");
                  setTimeout(() => {
                     $("#spinner").removeClass("d-block")
                     $("#spinner").addClass("d-none");
                     $("#errorMsg").removeClass('d-none')
                     $("#errorMsg").addClass('d-block')
                     $("#errorMsg").addClass('alert alert-danger');
                     $("#errorMsg").html(response.response);
                     setTimeout(() => {
                        $("#errorMsg").removeClass('d-block')
                        $("#errorMsg").addClass('d-none')
                     },1501);
                  }, 1500);
               } else if (response.status === 1) {
                  // $("#errorMsg").removeClass('alert alert-danger');
                  $("#spinner").removeClass("d-none")
                  $("#spinner").addClass("d-block");
                  setTimeout(() => {
                     $("#spinner").removeClass("d-block")
                     $("#spinner").addClass("d-none");
                     $("#errorMsg").removeClass('d-none')
                     $("#errorMsg").addClass('d-block')
                     $("#errorMsg").addClass('alert alert-success');
                     $("#errorMsg").html(response.response);
                  }, 1500);
                  
               }else if(response.status === 2){
                  $("#spinner").removeClass("d-none")
                  $("#spinner").addClass("d-block");
                  setTimeout(() => {
                        window.location="patient-profile.php?id="+response.response;
                  }, 1500);
               } else{
                  $("#errorMsg").html("please check what you are doing");                   
               }
            },
            error: function (response) {
               // let msg = JSON.parse(response);
               console.log(response)
            }
         })
       })
    })