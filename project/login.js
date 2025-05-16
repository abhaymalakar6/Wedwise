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
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (res.ok) {
      alert('Login successful');
      // Store user info in localStorage if needed
      localStorage.setItem('user', JSON.stringify(data.user));
      // Redirect to appropriate dashboard
      if (data.user.role === 'vendor') {
        window.location.href = 'vendor-profile.html';
      } else {
        window.location.href = 'index.html';
      }
    } else {
      alert(data.error || 'Login failed');
    }
  });

  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (response.ok) {
        alert('✅ Login successful');
        // Store user info in localStorage/session if needed
        window.location.href = 'dashboard.html'; // or vendor profile page
      } else {
        alert('❌ ' + data.message);
      }
    } catch (error) {
      console.error(error);
      alert('❌ Error during login.');
    }
  });

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  const res = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, role })
  });

  const data = await res.json();
  if (res.ok) {
    alert(`Welcome ${role}!`);
    // localStorage.setItem('token', data.token);
  } else {
    alert(data.message);
  }
});

