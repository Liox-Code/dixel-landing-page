export const transitionOpen = {
    initial: {
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    },
    animate: {
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    },
    exit: {
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

