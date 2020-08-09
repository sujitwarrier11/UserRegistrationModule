
const theme = {
    color: {
        bgBlue: '#2c6ed5',
        textBlack: '#222'
    },
    textStyles: {
        normal: {
            fontSize: '14px',
            lineHeight: 1.8,
            color: '#222',
            fontWeight: 400,
            fontFamily: 'Montserrat'
        },
        header: {
            lineHeight: 1.66,
            fontWeight: 900,
            color: '#222',
            fontFamily: 'Montserrat',
            fontSize: '24px',
            textTransform: 'uppercase',
            textAlign: 'center'
        }
    }
}

const checkStyle = (style, key, breakpointNo, objStyle) => {
    if (style) {
        if (Array.isArray(style)) {
            if (style[breakpointNo]) {
                objStyle[key] = style[breakpointNo];
            }
            else {
                objStyle[key] = style[style.length - 1];
            }
        }
        else {
            objStyle[key] = style
        }
    }
    return objStyle;
}

export const getStyle = ({ flexDirection, flex, width, height, pr, pl, pt, pb, px, py, mt, mb, mr, ml, mx, my, m, p, alignItems, justifyContent, bg, r, backgroundImage }, breakpointNo, isFlex) => {
    let objStyle = {
        boxSizing: 'border-box'
    };
    if (isFlex)
        objStyle.display = 'flex';
    objStyle = checkStyle(flexDirection, 'flexDirection', breakpointNo, objStyle);
    objStyle = checkStyle(flex, 'flex', breakpointNo, objStyle);
    objStyle = checkStyle(width, 'width', breakpointNo, objStyle);
    objStyle = checkStyle(height, 'height', breakpointNo, objStyle);
    objStyle = checkStyle(pr, 'paddingRight', breakpointNo, objStyle);
    objStyle = checkStyle(pl, 'paddingLeft', breakpointNo, objStyle);
    objStyle = checkStyle(pt, 'paddingTop', breakpointNo, objStyle);
    objStyle = checkStyle(pb, 'paddingBottom', breakpointNo, objStyle);
    if (px) {
        objStyle = checkStyle(px, 'paddingRight', breakpointNo, objStyle);
        objStyle = checkStyle(px, 'paddingLeft', breakpointNo, objStyle);
    }
    if (py) {
        objStyle = checkStyle(py, 'paddingTop', breakpointNo, objStyle);
        objStyle = checkStyle(py, 'paddingBottom', breakpointNo, objStyle);
    }
    objStyle = checkStyle(mr, 'marginRight', breakpointNo, objStyle);
    objStyle = checkStyle(ml, 'marginLeft', breakpointNo, objStyle);
    if (mx) {
        objStyle = checkStyle(mx, 'marginRight', breakpointNo, objStyle);
        objStyle = checkStyle(mx, 'marginLeft', breakpointNo, objStyle);
    }
    objStyle = checkStyle(mt, 'marginTop', breakpointNo, objStyle);
    objStyle = checkStyle(mb, 'marginBottom', breakpointNo, objStyle);
    if (my) {
        objStyle = checkStyle(my, 'marginTop', breakpointNo, objStyle);
        objStyle = checkStyle(my, 'marginBottom', breakpointNo, objStyle);
    }
    objStyle = checkStyle(alignItems, 'alignItems', breakpointNo, objStyle);
    objStyle = checkStyle(justifyContent, 'justifyContent', breakpointNo, objStyle);
    objStyle = checkStyle(p, 'padding', breakpointNo, objStyle);
    objStyle = checkStyle(m, 'margin', breakpointNo, objStyle);
    objStyle = checkStyle(r, 'borderRadius', breakpointNo, objStyle);
    if (bg) {
        const color = theme.color[bg] || bg;
        objStyle = checkStyle(color, 'backgroundColor', breakpointNo, objStyle);
    }
    if(backgroundImage){
        const bgImage = `url(${backgroundImage})`;
        objStyle = checkStyle(bgImage, 'backgroundImage', breakpointNo, objStyle);
    }
    return objStyle;
}

export const getTextStyles = variant => theme.textStyles[variant] || theme.textStyles['normal'];
