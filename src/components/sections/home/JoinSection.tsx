'use client';

import './JoinSection.scss';

export default function JoinSection() {
  return (
    <section className="section join" id="join" aria-labelledby="join-label">
      <div className="container join-container">
        <div className="join-content" data-reveal="left">
          <p className="section-subtitle" id="join-label">
            Join the roster
          </p>

          <h2 className="h2 section-title">
            Ready to grind with the <span className="span">Unigine squad?</span>
          </h2>

          <p className="section-text">
            Drop your info and show us what you bring to the lobby. Our talent
            crew scouts duelists, casters, coaches, and creators who live for
            clutch moments.
          </p>

          <ul className="join-benefits">
            <li className="join-benefit">
              <ion-icon name="flash-outline" aria-hidden="true"></ion-icon>
              <span>Weekly scrims with analyst feedback</span>
            </li>
            <li className="join-benefit">
              <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
              <span>Role-specific coaching pods and VOD labs</span>
            </li>
            <li className="join-benefit">
              <ion-icon name="airplane-outline" aria-hidden="true"></ion-icon>
              <span>LAN travel support &amp; bootcamp perks</span>
            </li>
          </ul>
        </div>

        <form
          action="#"
          method="post"
          className="join-form"
          data-reveal="right"
        >
          <div className="form-grid">
            <label className="form-field">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="full_name"
                required
                placeholder="Alex Mercer"
                autoComplete="name"
              />
            </label>

            <label className="form-field">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="alex@unigine.gg"
                autoComplete="email"
              />
            </label>

            <label className="form-field">
              <span className="field-label">Discord ID</span>
              <input
                type="text"
                name="discord"
                required
                placeholder="UnigineMain#2048"
              />
            </label>

            <label className="form-field">
              <span className="field-label">Preferred Role</span>
              <div className="select-wrapper">
                <select name="role" required>
                  <option value="" disabled>
                    Select your specialty
                  </option>
                  <option value="player">Gameplay Athlete</option>
                  <option value="coach">Coach / Analyst</option>
                  <option value="content">Content Creator</option>
                  <option value="community">Community Manager</option>
                </select>
              </div>
            </label>
          </div>

          <label className="form-field full">
            <span className="field-label">
              Tell us about your highlight reel
            </span>
            <textarea
              name="message"
              rows={4}
              placeholder="Rank history, tournament finishes, or a link to your best plays."
            />
          </label>

          <div className="form-consent">
            <input
              type="checkbox"
              id="talent-consent"
              name="consent"
              required
            />
            <label htmlFor="talent-consent">
              I agree to let Unigine contact me about roster opportunities and
              community events.
            </label>
          </div>

          <button type="submit" className="btn" data-btn>
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}
