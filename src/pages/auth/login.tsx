import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import styles from '@/styles/pages.module.css';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: 调用登录 API
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className={styles.authCard}>
      <div className={styles.authHeader}>
        <h2 className={styles.authTitle}>欢迎回来</h2>
        <p className={styles.authSubtitle}>登录您的账户以继续</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.authForm}>
        <div className={styles.formGroup}>
          <label className={styles.label}>邮箱</label>
          <input type="email" required className={styles.input} placeholder="your@email.com" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>密码</label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              className={styles.passwordInput}
              placeholder="输入密码"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.passwordToggle}
            >
              {showPassword ? (
                <EyeOff className={styles.eyeIcon} />
              ) : (
                <Eye className={styles.eyeIcon} />
              )}
            </button>
          </div>
        </div>

        <div className={styles.authRow}>
          <label className={styles.rememberMe}>
            <input type="checkbox" />
            记住我
          </label>
          <a href="#" className={styles.forgotLink}>
            忘记密码？
          </a>
        </div>

        <button type="submit" disabled={loading} className={styles.authSubmitBtn}>
          {loading ? '登录中...' : '登录'}
        </button>
      </form>

      <p className={styles.authFooter}>
        还没有账户？{' '}
        <a href="#" className={styles.authLink}>
          立即注册
        </a>
      </p>
    </div>
  );
}
