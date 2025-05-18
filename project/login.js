function selectRole(role) {
  selectedRole = role;

  document.getElementById("customerBtn").classList.remove("active");
  document.getElementById("vendorBtn").classList.remove("active");

  document.getElementById("customer-link").style.display = role === 'customer' ? 'inline-block' : 'none';
  document.getElementById("vendor-link").style.display = role === 'vendor' ? 'inline-block' : 'none';

  if (role === 'customer') {
    document.getElementById("customerBtn").classList.add("active");
  } else {
    document.getElementById("vendorBtn").classList.add("active");
  }
}




document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("token", data.token);
    alert("Login success");
    window.location.href = "/vendor-profile.html";
  } else {
    alert(data.message || "Login failed");
  }
});
