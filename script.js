<<<<<<< HEAD
const username = "Anshul-Patidar";
const repoList = document.getElementById("repo-list");

async function fetchRepos() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
    );
    const repos = await response.json();

    repoList.innerHTML = "";
    repos.forEach(repo => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> — ${repo.description || ""}`;
      repoList.appendChild(li);
    });
  } catch (error) {
    repoList.innerHTML = "<li>Failed to load repositories.</li>";
  }
}

fetchRepos();
=======
const username = "Anshul-Patidar";
const repoList = document.getElementById("repo-list");

async function fetchRepos() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
    );
    const repos = await response.json();

    repoList.innerHTML = "";
    repos.forEach(repo => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> — ${repo.description || ""}`;
      repoList.appendChild(li);
    });
  } catch (error) {
    repoList.innerHTML = "<li>Failed to load repositories.</li>";
  }
}

fetchRepos();
>>>>>>> c4df2a2bccacb143f3b98e71a9b07ba9f327b7f3
