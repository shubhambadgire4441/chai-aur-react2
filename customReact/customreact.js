function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    // Safely set children
    domElement.textContent = reactElement.children;

    // Safely set attributes if they exist
    if (reactElement.props) {
        if (reactElement.props.href) {
            domElement.setAttribute('href', reactElement.props.href);
        }
        if (reactElement.props.target) {
            domElement.setAttribute('target', reactElement.props.target);
        }
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root'); // Corrected "doucment" typo

customRender(reactElement, mainContainer);
