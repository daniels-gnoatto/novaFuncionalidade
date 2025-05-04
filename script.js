window.onload = function() {
    var status = localStorage.getItem("status");
    if (status) {
      document.getElementById("status-text").textContent = status;
    }
  };