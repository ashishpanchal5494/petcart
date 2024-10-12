import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../utils/configur'; // Import the auth instance
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, User } from 'firebase/auth';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchModal = (): void => {
    setSearchModalOpen(!isSearchModalOpen);
  };

  // Sign in with Google
  const handleSignIn = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  // Sign out user
  const handleSignOut = async (): Promise<void> => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <header>
      <div id="sticky-header" className="menu-area transparent-header">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                <i className="fas fa-bars"></i>
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav show">
                  <div className="logo">
                    <Link to="/">
                      <img src="img/logo/petcart7.png" style={{ height: 50, marginBottom: 10 }} alt="Logo" />
                    </Link>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li className="active menu-item-has-children">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="cat">Cat</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="dog">Dog</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="price">Price</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="blog">Blog</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action d-none d-md-block">
                    <ul>
                      <li className="header-search">
                        <a style={{ cursor: "pointer" }} onClick={toggleSearchModal}>
                          <i className="fas fa-search"></i>
                        </a>
                      </li>
                      <li className="header-lang">
                        <form action="#">
                          <div className="icon">
                            <i className="flaticon-globe"></i>
                          </div>
                          <select id="lang-dropdown">
                            <option value="En">En</option>
                            <option value="Au">Au</option>
                            <option value="AR">AR</option>
                            <option value="TU">TU</option>
                          </select>
                        </form>
                      </li>
                      <li className="header-btn">
                        {user ? (
                          <button onClick={handleSignOut} className="btn">
                            Sign Out
                          </button>
                        ) : (
                          <button onClick={handleSignIn} className="btn">
                            Sign In
                          </button>
                        )}
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* Rest of your code */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
