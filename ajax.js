$(() => {
  /*
  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    // success: (resp) => {
    //   console.log(resp);
    // },
    // error: (error) => {
    //   console.log(error);
    // },
  })
    .done((data) => {
      console.log(data);
    })
    .fail((error) => {
      console.log(error);
    });


  */
  /*
  $.ajax({
    type: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: JSON.stringify(body),
    contentType: "application/json",
    // success: (resp) => {
    //   console.log(resp);
    // },
    // error: (error) => {
    //   console.log(error);
    // },
  })
    .done((data) => {
      console.log(data);
    })
    .fail((error) => {
      console.log(error);
    });
    */
  const body = {
    title: "Title",
    body: "Some info",
    id: 1000,
  };

  $.post("https://jsonplaceholder.typicode.com/posts", body, (resp) => {
    console.log(resp);
  }).fail((error) => {
    console.log(error);
  });
});
