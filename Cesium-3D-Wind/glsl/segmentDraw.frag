void main() {
	if (particleSpeed.x == ignoreValue && particleSpeed.y == ignoreValue) { 
        gl_FragColor = vec4(0.0);
	}
    else{
		const vec4 white = vec4(1.0);
		gl_FragColor = white;
	}
}