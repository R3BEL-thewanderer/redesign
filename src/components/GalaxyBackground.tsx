import { Component, Suspense, lazy } from 'react';
import type { ReactNode } from 'react';

// Error boundary to catch Three.js/WebGL crashes without killing the entire app
class GalaxyErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.warn('GalaxyBackground failed to render:', error.message);
  }
  render() {
    if (this.state.hasError) {
      // Fallback: just show a dark static background
      return <div className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none bg-[#050510]" />;
    }
    return this.props.children;
  }
}

// Lazy-load the heavy Three.js canvas so it doesn't block initial paint
const GalaxyCanvas = lazy(() => import('./GalaxyCanvas'));

export default function GalaxyBackground() {
  return (
    <GalaxyErrorBoundary>
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none bg-[#050510]">
        <Suspense fallback={null}>
          <GalaxyCanvas />
        </Suspense>
      </div>
    </GalaxyErrorBoundary>
  );
}
