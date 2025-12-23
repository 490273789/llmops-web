import AppAbilities from './components/AppAbilities';
import Chat from './components/Chat';
import Prompts from './components/Prompts';
import styles from './config.module.scss';

const Configs = () => {
  return (
    <div className={styles.configWrap}>
      {/* 应用编排 */}
      <div className={styles.appHEdit}>
        <div className={styles.appHeader}>应用编排</div>
        <div className={styles.appContent}>
          {/* 人设与回复 */}
          <Prompts />
          {/* 应用能力 */}
          <AppAbilities />
        </div>
      </div>
      {/* 调试与预览 */}
      <Chat />
    </div>
  );
};

export default Configs;
