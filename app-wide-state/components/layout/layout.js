import { Fragment } from 'react';
import NotificationContext from '../../store/notification-context';
import MainHeader from './main-header';
import { useContext } from 'react';
import Notification from '../ui/notification';

function Layout(props) {
  const ctx = useContext(NotificationContext)

  const activeNotification = ctx.activeNotification;
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && <Notification title={activeNotification.title} status={activeNotification.status} message={activeNotification.message}/>}
    </Fragment>
  );
}

export default Layout;
