function openModal(){
    document.getElementById("hireModal").classList.add("active");
  }
  
  function closeModal(){
    document.getElementById("hireModal").classList.remove("active");
  }
  /* close */
  document.getElementById("hireModal").addEventListener("click", (e) => {
    if (e.target.id === "hireModal") closeModal();
  });
    
