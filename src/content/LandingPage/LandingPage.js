import React, { Component } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
} from '@carbon/react';
import { InfoSection, InfoCard } from '../../components/Info';
import { Globe, Application, PersonFavorite } from '@carbon/react/icons';
import arch from '../../images/arch.png'; 
class LandingPage extends Component {
  render() {

    return (
      <Grid className="landing-page" fullWidth>
        <Column lg={16} md={8} sm={4} className="landing-page__banner">
          <h3 style={{ fontSize: 14 }}>Inspire your users by creating  AI-infused applications for Hybrid Cloud!</h3>
          <h1 className="landing-page__heading">
          GSI Lab EMEA Workshop & Hackathon
          </h1>
        </Column>
        <Column lg={16} md={8} sm={4} className="landing-page__r2">
          <Tabs defaultSelectedIndex={0}>
            <TabList className="tabs-group" aria-label="Tab navigation">
              <Tab>About</Tab>
              <Tab>Design</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Grid className="tabs-group-content">
                  <Column lg={16} md={8} sm={4} className="landing-page__r3">
                    <InfoSection heading="MVP Details & business need">
                      <InfoCard
                        heading="WHAT WILL YOU BUILD?"
                        body="An app that enables the user to predict the best moment to use appliances according to time and monetary constrains."
                        icon={() => <PersonFavorite size={32} />}
                      />
                      <InfoCard
                        heading="WICH BUSINESS NEED DOES IT ANSWER?"
                        body="Smart House Retail users that want to save money and fit the use of the appliances into their busy schedules."
                        icon={() => <Application size={32} />}
                      />
                      <InfoCard
                        heading="ANY WOW EFFECT?"
                        body="We will use sentiment analysis as a parameter for the model."
                        icon={() => <Globe size={32} />}
                      />
                    </InfoSection>
                  </Column>
                </Grid>
              </TabPanel>
              <TabPanel>
                <Grid className="tabs-group-content">
                  <Column lg={16} md={8} sm={4} className="landing-page__r3">
                    <InfoSection heading="MVP Architecture">
                      <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                      <img
                        className="landing-page__illo"
                        src={arch}
                        alt="MVP Architecture"
                      />
                    </Column>
                
                    </InfoSection>
                  </Column>
                </Grid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Column>
       

      </Grid>
    );
  }
};

export default LandingPage;
