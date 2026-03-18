# NotFound Component

A premium, visually appealing 404 page component.

## Features
- Fully responsive design
- Dark mode support
- Animated background elements
- Built-in "Go Back" and "Home" navigation buttons
- Integrated with common `Button` component

## Usage

```jsx
import NotFound from './components/common/NotFound';

function MyPage() {
  return (
    <NotFound 
      onBackHome={() => navigate('/')} 
    />
  );
}
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onBackHome | Function | `() => window.location.href = '/'` | Callback function for the "Back to Home" button |
