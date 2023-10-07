
useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    let mouseDown = true;
    let rgb = [];

    tl.fromTo(componentRef.current, { scale: 0, opacity: 0 }, { scale: 1.0, opacity: 1 })
        .fromTo(componentRef.current.querySelector('h1'), { y: '-100%' }, { y: '0%' })
        .fromTo(componentRef.current.querySelector('.pixel'), { opacity: 0 }, { opacity: 1 });
    const handleMouseDown = () => (mouseDown = true);
    const handleMouseUp = () => (mouseDown = false);

    const handleMouseMove = (e) => {
        if (mouseDown) {
            rgb = [
                Math.round((e.pageX / window.innerWidth) * 255),
                Math.round((e.pageY / window.innerHeight) * 255),
                150,
            ];
            const newColor = `rgb(${rgb.join(',')})`;
            gsap.to(componentRef.current, {
                backgroundColor: newColor,
            });
        }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    // Clean up event listeners on component unmount
    return () => {
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mousemove', handleMouseMove);
    };
}, []);