import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Logo } from '../Logo/Logo';
import './header.css';

const links = ['Overview', 'Projects', 'Reports', 'Billing'];

export interface HeaderProps {
  user?: { name: string };
  active?: string;
  unreadCount?: number;
  onLogIn?: () => void;
  onSignUp?: () => void;
}

export function Header({
  user,
  active = 'Overview',
  unreadCount = 0,
  onLogIn,
  onSignUp,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__home" href="#">
          <Logo />
        </a>
        {user && (
          <nav className="header__nav" aria-label="Main">
            {links.map(link => (
              <a
                key={link}
                href="#"
                className="header__link"
                aria-current={link === active ? 'page' : undefined}
              >
                {link}
              </a>
            ))}
          </nav>
        )}
        <div className="header__actions">
          {user ? (
            <>
              <button className="header__icon-button" aria-label="Search">
                <Icon name="search" size={18} />
              </button>
              <button
                className="header__icon-button"
                aria-label={
                  unreadCount
                    ? `Notifications (${unreadCount} unread)`
                    : 'Notifications'
                }
              >
                <Icon name="bell" size={18} />
                {unreadCount > 0 && (
                  <span className="header__badge" aria-hidden="true">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>
              <Avatar name={user.name} size="sm" />
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={onLogIn}>
                Log in
              </Button>
              <Button size="sm" onClick={onSignUp}>
                Start free trial
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
