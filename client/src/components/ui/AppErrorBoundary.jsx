import React from 'react';

/**
 * Keeps an unexpected React rendering error from leaving the entire app blank.
 * The fallback follows Kuki's existing soft pastel visual language.
 */
export class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('[Kuki\'s Saloon] Screen rendering error:', error, info);
  }

  handleRetry = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen flex items-center justify-center bg-[#FAF8FC] px-4 py-10 text-pastel-amethyst">
          <section
            role="alert"
            className="w-full max-w-md rounded-3xl border border-purple-100 bg-white/95 p-7 text-center shadow-pastel-lg"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-pastel-pink/30 bg-gradient-to-br from-pastel-pink/20 to-pastel-purple/20 text-2xl">
              ✂
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-pastel-purple">
              Kuki's Saloon
            </p>
            <h1 className="mb-2 font-serif text-2xl font-semibold text-pastel-amethyst">
              This screen couldn't load
            </h1>
            <p className="mb-6 text-sm leading-6 text-amethyst-600">
              An unexpected display error occurred. Your saved queue data has not been intentionally changed.
              Please reload the screen. If the problem continues, check the browser console for details.
            </p>
            <button
              type="button"
              onClick={this.handleRetry}
              className="min-h-[44px] rounded-full bg-gradient-to-r from-pastel-pink to-pastel-purple px-6 py-3 text-sm font-semibold text-white shadow-pastel-sm transition hover:brightness-105"
            >
              Reload screen
            </button>
            <a
              href="/"
              className="ml-3 inline-flex min-h-[44px] items-center rounded-full border border-purple-100 px-5 py-3 text-sm font-semibold text-amethyst-700 transition hover:bg-pastel-lavender"
            >
              Home
            </a>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
