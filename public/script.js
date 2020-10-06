const h = window.innerHeight;
const w = window.innerWidth;

const particles = [];

function setup() {
	createCanvas(w, h);

	const particlesNum = Math.floor(w / 10);

	for (let i = 0; i < particlesNum; i++) {
		particles.push(new Particle());
	}
}

function draw() {
	background("#2C3A47");
	particles.forEach((p, index) => {
		p.update();
		p.draw();
		p.checkParticles(particles.slice(index));
	});
}

class Particle {
	constructor() {
		// Position
		this.pos = createVector(random(width), random(height));

		// Velocity
		this.vel = createVector(random(-4, 4), random(-4, 4));

		// Size
		this.size = 5;
	}

	// Update motion by adding velocity
	update() {
		this.pos.add(this.vel);
		this.edges();
	}

	// Draw single particle
	draw() {
		noStroke();
		fill("rgba(255,255,255,0.5)");
		circle(this.pos.x, this.pos.y, this.size);
	}

	// Detect edges
	edges() {
		if (this.pos.x < 0 || this.pos.x > w) {
			this.vel.x *= -1;
		}

		if (this.pos.y < 0 || this.pos.y > h) {
			this.vel.y *= -1;
		}
	}

	// Connect particles
	checkParticles() {
		particles.forEach((particle) => {
			const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

			if (d < 100) {
				stroke("rgba(255,255,255,0.1)");
				line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
			}
		});
	}
}
