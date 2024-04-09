This is the codealong. Try to follow along here.

Contains code pasted from Adrianas

* Upgraded React 17 client rendering to React 18
    ```
    import { render } from 'react-dom';
    const container = document.getElementById('app');
    render(<App tab="home" />, container);
    ```
    became
    ```
    import { createRoot } from 'react-dom/client';
    const container = document.getElementById('app');
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<App tab="home" />);
    ```
    (although they are done differently, often `import ReadtDOM...`)
