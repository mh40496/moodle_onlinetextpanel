document.addEventListener("DOMContentLoaded", function () 
{
    const on = document.getElementById("sidebaronbutton");
    const half = document.getElementById("sidebarhalfbutton");
    const off = document.getElementById("sidebaroffbutton");

    const sidebar = document.getElementById("sidebar");
    const editor = document.getElementById("editor");
    const page = document.getElementById("plugin_page");

    sidebar.classList.add("halfactive"); 
    page.classList.add("halfactive"); 
    half.classList.add("active");
  
    on.addEventListener("click", function (e) 
    {
      e.preventDefault(); 
      sidebar.classList.remove("halfactive"); 
      sidebar.classList.remove("inactive"); 
      sidebar.classList.add("active"); 

      page.classList.remove("halfactive"); 
      page.classList.remove("inactive"); 
      page.classList.add("active"); 

      half.classList.remove("active");
      off.classList.remove("active");
      on.classList.add("active");
    });

    half.addEventListener("click", function (e) 
    {
      e.preventDefault(); 
      sidebar.classList.remove("active"); 
      sidebar.classList.remove("inactive"); 
      sidebar.classList.add("halfactive"); 

      page.classList.remove("active"); 
      page.classList.remove("inactive"); 
      page.classList.add("halfactive"); 

      off.classList.remove("active");
      on.classList.remove("active");
      half.classList.add("active");
    });

    off.addEventListener("click", function (e) 
    {
      e.preventDefault(); 
      sidebar.classList.remove("active"); 
      sidebar.classList.remove("halfactive"); 
      sidebar.classList.add("inactive"); 

      page.classList.remove("active"); 
      page.classList.remove("halfactive"); 
      page.classList.add("inactive"); 

      half.classList.remove("active");
      on.classList.remove("active");
      off.classList.add("active");
    });
});
