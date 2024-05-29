document.addEventListener("DOMContentLoaded", function () 
{
    const on = document.getElementById("sidebaronbutton");
    const half = document.getElementById("sidebarhalfbutton");
    const off = document.getElementById("sidebaroffbutton");

    const sidebar = document.getElementById("sidebar");
    const editor = document.getElementById("editor");
    const page = document.getElementById("plugin_page");
  
    on.addEventListener("click", function (e) 
    {
      e.preventDefault(); 
      sidebar.classList.remove("halfactive"); 
      sidebar.classList.remove("inactive"); 
      sidebar.classList.add("active"); 

      page.classList.remove("halfactive"); 
      page.classList.remove("inactive"); 
      page.classList.add("active"); 
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
    });
});
