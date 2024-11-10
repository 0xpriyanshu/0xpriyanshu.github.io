import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FiGitBranch } from "react-icons/fi";

function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: 0,
    forks: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/repos/0xpriyanshu/0xpriyanshu")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count || 0,
          forks: forks_count || 0,
        });
      })
      .catch((e) => {
        console.error("Failed to fetch GitHub data:", e);
        setGitHubInfo({ stars: 0, forks: 0 });
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <footer>
      <Link
        href="https://github.com/0xpriyanshu/0xpriyanshu"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">
          Designed and Built by Priyanshu Kumar.
        </span>
        {!loading && (
          <div className="footer-git">
            <div className="footer-git-item">
              <FaRegStar className="footer-git-item-icon" />
              <span className="footer-git-item-text">{githubInfo.stars}</span>
            </div>
            <div className="footer-git-item">
              <FiGitBranch className="footer-git-item-icon" />
              <span className="footer-git-item-text">{githubInfo.forks}</span>
            </div>
          </div>
        )}
        {loading && <span className="footer-loading">Loading stats...</span>}
      </Link>
    </footer>
  );
}

export default Footer;
