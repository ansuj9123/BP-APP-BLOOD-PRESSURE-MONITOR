import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Disclaimer = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="container $font-family-sans-serif d-flex gap-3 shadow p-3 mt-5 bg-body-tertiary">
        App Disclaimer This mobile application ("App") is provided by for
        informational purposes. By downloading, installing, or using this App,
        you agree to be bound by the following terms and conditions: Use at Your
        Own Risk: The information provided within this App is intended for
        general informational purposes only. It may not be accurate, up-to-date,
        or complete. No responsibility is taken for any reliance placed on the
        App's content. No Professional Advice: The App does not provide
        professional advice, and you should not use it as a substitute for
        professional consultation or advice. Always seek the advice of qualified
        professionals for specific concerns. Third-Party Content: The App may
        contain links to third-party websites, services, or content. The Company
        does not endorse or control these third-party resources and is not
        responsible for their accuracy, content, or availability. Privacy: The
        App does no store any information or personal details. Updates and
        Maintenance: The Company may update, modify, or discontinue the App at
        any time without notice. It is your responsibility to ensure that you
        have the latest version of the App. Disclaimer of Warranty: The App is
        provided "as is" and "as available" without any warranties, express or
        implied, including but not limited to warranties of merchantability,
        fitness for a particular purpose, or non-infringement. Limitation of
        Liability: In no event shall there be any liability for any direct,
        indirect, incidental, special, or consequential damages arising out of
        or in any way connected with your use of the App. Jurisdiction: This App
        is intended for users within the united kingdom. If you access the App
        from outside this jurisdiction, you are responsible for compliance with
        local laws. By using this App, you acknowledge that you have read and
        understood this disclaimer. If you do not agree with any part of this
        disclaimer, please do not use the App.
      </div>
      <section>
        <Button onClick={() => navigate("/Medication")} variant="dark">
          NEXT
        </Button>
      </section>
    </div>
  );
};

export default Disclaimer;
