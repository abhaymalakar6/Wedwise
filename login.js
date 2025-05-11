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

// Show only customer registration by default
window.onload = () => {
  document.getElementById("vendor-link").style.display = "none";
};
