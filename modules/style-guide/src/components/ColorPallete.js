import React from "react";
import ClayLayout from "@clayui/layout";

export default function () {
  const rowStyle = {
    marginBottom: "2rem",
  };
  return (
    <ClayLayout.Container view>

      {/* Colors Title */}
      <ClayLayout.Row justify="start" style={rowStyle}>
        <ClayLayout.Col>
            <h1><span style={{ color: 'var(--gray-400)' }}>01.</span> Colors</h1>
        </ClayLayout.Col>
      </ClayLayout.Row>


      <ClayLayout.Row justify="start" style={rowStyle}>
        {/* Primary Color Title */}
        <ClayLayout.Col size={4}>
          <div className="d-inline-flex flex-column">
            <h3>Primary</h3>
            <div className="d-inline-flex flex-column" style={{ alignItems: 'center', width: 'fit-content' }}>
              <span
                className="rounded-circle shadow"
                style={{
                  backgroundColor: "var(--primary)",
                  width: '8rem',
                  height: '8rem'
                }}
              />
              <span>#F9A13B</span>
            </div>
          </div>
        </ClayLayout.Col>

        {/* Primary Color Variants */}
        <ClayLayout.Col>
          {/* Lighten Row */}
          <ClayLayout.Row justify="start" style={rowStyle}>
            {new Array(6).fill(0).map((_, i) => (
              <ClayLayout.Col key={i}>
                <div className="d-inline-flex flex-column" style={{ alignItems: 'center' }}>
                  <span
                    className="rounded-circle shadow"
                    style={{
                      backgroundColor: `var(--primary-lighten-${i + 1})`,
                      width: '4rem',
                      height: '4rem'
                    }}
                  />
                  <span className="font-weight-bold">Lighten {i + 1}</span>
                </div>
              </ClayLayout.Col>
            ))}
          </ClayLayout.Row>

          {/* Darken Row */}
          <ClayLayout.Row justify="start" style={rowStyle}>
            {new Array(5).fill(0).map((_, i) => (
              <ClayLayout.Col key={i}>
                <div className="d-inline-flex flex-column" style={{ alignItems: 'center' }}>
                  <span
                    className=" rounded-circle shadow"
                    style={{
                      backgroundColor: `var(--primary-darken-${i + 1})`,
                      width: '4rem',
                      height: '4rem'
                    }}
                  />
                  <span className="font-weight-bold">Darken {i + 1}</span>
                </div>
              </ClayLayout.Col>
            ))}
            <ClayLayout.Col />
          </ClayLayout.Row>
        </ClayLayout.Col>
      </ClayLayout.Row>

      <ClayLayout.Row justify="start" style={rowStyle}>
        {/* Secondary Color Title */}
        <ClayLayout.Col size={4}>
          <div className="d-inline-flex flex-column" >
            <h3>Secondary</h3>
            <div className="d-inline-flex flex-column" style={{ alignItems: 'center', width: 'fit-content' }}>
              <span
                className="rounded-circle shadow"
                style={{
                  backgroundColor: "var(--secondary)",
                  width: '8rem',
                  height: '8rem'
                }}
              />
              <span >#96A2AE</span>
            </div>
          </div>
        </ClayLayout.Col>

        {/* Secondary Color Variants */}
        <ClayLayout.Col>
          {/* Secondary Lighten */}
          <ClayLayout.Row justify="start" style={rowStyle}>
            {new Array(6).fill(0).map((_, i) => (
              <ClayLayout.Col key={i}>
                <div className="d-inline-flex flex-column" style={{ alignItems: 'center' }}>
                  <span
                    className="rounded-circle shadow"
                    style={{
                      backgroundColor: `var(--secondary-lighten-${i + 1})`,
                      width: '4rem',
                      height: '4rem'
                    }}
                  />
                  <span className="font-weight-bold">Lighten {i + 1}</span>
                </div>
              </ClayLayout.Col>
            ))}
          </ClayLayout.Row>

          {/* Secondary Darken */}
          <ClayLayout.Row justify="start" style={rowStyle}>
            {new Array(5).fill(0).map((_, i) => (
              <ClayLayout.Col key={i}>
                <div className="d-inline-flex flex-column" style={{ alignItems: 'center' }}>
                  <span
                    className="rounded-circle shadow"
                    style={{
                      backgroundColor: `var(--secondary-darken-${i + 1})`,
                      width: '4rem',
                      height: '4rem'
                    }}
                  />
                  <span className="font-weight-bold">Darken {i + 1}</span>
                </div>
              </ClayLayout.Col>
            ))}
            <ClayLayout.Col />
          </ClayLayout.Row>
        </ClayLayout.Col>
      </ClayLayout.Row>


      <ClayLayout.Row justify="start" style={rowStyle}>
        {/* Grayscale Title*/}
        <ClayLayout.Col size={4}>
          <div className="d-inline-flex flex-column">
            <h3>Gray Scale</h3>
          </div>
        </ClayLayout.Col>
        {/* Grayscale Variants */}
        <ClayLayout.Col>
          <ClayLayout.Row justify="start" style={rowStyle}>
            <ClayLayout.Col >
              <div className="d-inline-flex flex-column" style={{ alignItems: 'center' }}>
                <span
                  className="rounded-circle shadow"
                  style={{
                    backgroundColor: `var(--black)`,
                    width: '4rem',
                    height: '4rem'
                  }}
                />
                <span className="font-weight-bold">Neutral 0</span>
              </div>
            </ClayLayout.Col>
            {[...Array(9).keys()]
              .slice(4)
              .reverse()
              .map((row, i) => (
                <ClayLayout.Col key={row}>
                  <div className="d-inline-flex flex-column" style={{ alignItems: 'center' }}>
                    <span
                      className="rounded-circle shadow"
                      style={{
                        backgroundColor: `var(--gray-${row + 1}00)`,
                        width: '4rem',
                        height: '4rem'
                      }}
                    />
                    <span className="font-weight-bold">Neutral {i + 1}</span>
                  </div>
                </ClayLayout.Col>
              ))}
          </ClayLayout.Row>
          <ClayLayout.Row justify="start" style={rowStyle}>
            {[...Array(4).keys()]
              .reverse()
              .map((row, i) => (
                <ClayLayout.Col key={row}>
                  <div className="d-inline-flex flex-column" style={{ alignItems: 'center' }}>
                    <span
                      className="rounded-circle shadow"
                      style={{
                        backgroundColor: `var(--gray-${row + 1}00)`,
                        width: '4rem',
                        height: '4rem'
                      }}
                    />
                    <span className="font-weight-bold">Neutral {i + 6}</span>
                  </div>
                </ClayLayout.Col>
              ))}
            <ClayLayout.Col>
              <div className="d-inline-flex flex-column" style={{ alignItems: 'center' }}>
                <span
                  className="rounded-circle shadow"
                  style={{
                    backgroundColor: "var(--white)",
                    width: '4rem',
                    height: '4rem'
                  }}
                />
                <span className="font-weight-bold">Neutral 10</span>
              </div>
            </ClayLayout.Col>
            <ClayLayout.Col />
          </ClayLayout.Row>
        </ClayLayout.Col>
      </ClayLayout.Row>

      <ClayLayout.Row justify="start" style={rowStyle}>
        {/* Status Title */}
        <ClayLayout.Col size={4}>
          <div className="d-inline-flex flex-column">
            <h3>Status</h3>
          </div>
        </ClayLayout.Col>

        {/* Status Variants */}
        <ClayLayout.Col>
          <ClayLayout.Row justify="start" style={rowStyle}>
            <ClayLayout.Col size={2}>
              <div className="d-inline-flex flex-column" style={{ alignItems: 'center' }}>
                <span
                  className="rounded-circle shadow"
                  style={{
                    backgroundColor: "var(--info)",
                    width: '4rem',
                    height: '4rem'
                  }}
                />
                <span className="font-weight-bold">Info</span>
              </div>
            </ClayLayout.Col>
            <ClayLayout.Col size={2}>
              <div className="d-inline-flex flex-column" style={{ alignItems: 'center' }}>
                <span
                  className="rounded-circle shadow"
                  style={{
                    backgroundColor: "var(--success)",
                    width: '4rem',
                    height: '4rem'
                  }}
                />
                <span className="font-weight-bold">Success</span>
              </div>
            </ClayLayout.Col>
            <ClayLayout.Col size={2}>
              <div className="d-inline-flex flex-column" style={{ alignItems: 'center' }}>
                <span
                  className="rounded-circle shadow"
                  style={{
                    backgroundColor: "var(--warning)",
                    width: '4rem',
                    height: '4rem'
                  }}
                />
                <span className="font-weight-bold">Warning</span>
              </div>
            </ClayLayout.Col>
            <ClayLayout.Col size={2}>
              <div className="d-inline-flex flex-column" style={{ alignItems: 'center' }}>
                <span
                  className="rounded-circle shadow"
                  style={{
                    backgroundColor: "var(--danger)",
                    width: '4rem',
                    height: '4rem'
                  }}
                />
                <span className="font-weight-bold">Danger</span>
              </div>
            </ClayLayout.Col>
            <ClayLayout.Col size={4} />
          </ClayLayout.Row>
        </ClayLayout.Col>
      </ClayLayout.Row>
    </ClayLayout.Container>
  );
}
