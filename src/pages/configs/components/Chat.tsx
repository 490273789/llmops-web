import styles from './Chat.module.scss';

const Chat: React.FC = () => {
  return (
    <div className={styles.debugAndPreview}>
      <div className={styles.header}>调试与预览</div>
      <div className={styles.chatWrap}>
        <div className={styles.chatList}>
          <div className={styles.chatItem}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatar}>N</div>
            </div>
            <div className={styles.messageWarp}>
              <div className={styles.title}>
                <div className={styles.name}>Nathan</div>
                <div className={styles.time}>12/02 15:32</div>
              </div>

              <div className={styles.messageDetails}>
                <div className={styles.message}>讲解一下asyncio库的用法</div>
                <div className={styles.tools}></div>
              </div>
            </div>
          </div>
          {/* <div className={styles.noData}>Hello! </div> */}
        </div>
        <div className={styles.chatInput}>
          <div className={styles.inputWrap}></div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
