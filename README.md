# PeekTrack App

A mobile application for logging and tracking mountain ascents in a private, offline-first way. Part of the [PeekTrack.app](https://peektrack.app) project.

## Description

PeekTrack App allows outdoor enthusiasts to record their mountain climbing adventures with detailed information including peak names, dates, coordinates, personal notes, and photos. The app prioritizes privacy and offline functionality, ensuring your adventure data stays secure and accessible even without internet connectivity.

## Features

- **Peak Logging**: Register ascents with peak name, date, and GPS coordinates
- **Rich Notes**: Add detailed notes and observations for each ascent
- **Photo Documentation**: Attach photos to capture memories and conditions
- **History View**: Browse and search through your climbing history
- **Offline-First**: Full functionality without internet connection using SQLite
- **Map Integration**: Visualize your ascents on interactive maps
- **Data Privacy**: All data stored locally on your device

## Tech Stack

- **Framework**: React Native with Expo
- **Database**: SQLite (expo-sqlite)
- **Maps**: react-native-maps
- **Language**: TypeScript
- **Platform**: Cross-platform (iOS & Android)

## Installation & Setup

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/peektrack-app.git
   cd peektrack-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on device/simulator**
   - For iOS: `npm run ios` or scan QR code with Expo Go app
   - For Android: `npm run android` or scan QR code with Expo Go app
   - For web: `npm run web`

### Development

The app uses Expo for development and deployment. You can use the Expo Go app on your mobile device to test the application during development.

## Roadmap

### Week 1: Local Storage Foundation
- [ ] SQLite database setup and schema design
- [ ] Basic ascent logging functionality
- [ ] Photo capture and storage
- [ ] Local data persistence

### Week 2: Sync & Authentication
- [ ] User authentication system
- [ ] Cloud sync capabilities
- [ ] Data backup and restore
- [ ] Cross-device synchronization

### Week 3: Statistics & Export
- [ ] Climbing statistics and analytics
- [ ] Data export functionality (GPX, CSV)
- [ ] Achievement system
- [ ] Social sharing features

## Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@peektrack.app or join our community discussions.

---

**PeekTrack** - Track your peaks, preserve your memories.
