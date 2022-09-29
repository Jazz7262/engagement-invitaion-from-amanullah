import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. KSA Amanullah Ashrafi Sahab</h2>
                <h5 className="mt-3">
                    Prop.: KSA Gold Smith,
                    <br />
                    Shroff Bazar, <br />
                    Adoni.
                </h5>
                <h5 className="mt-3">
                    H.No.: 26/86/14, Havanapet, Adoni,
                    <br />
                    Kurnool Dist., AP - 518 301.
                </h5>
                <p className="address">
                    Contact: +91 99598 44181, <br />
                    +91 91330 75136.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
